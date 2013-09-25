function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
	this.parent = null;
}

Node.prototype.setLeft = function(node) {
	if(node != null) {
		node.setParent(this);	
	}
	
	this.left = node;
}

Node.prototype.setRight = function(node) {
	if(node != null) {
		node.setParent(this);	
	}
	
	this.right = node;
}

Node.prototype.setParent = function(node) {
	this.parent = node;
}

Node.prototype.whichNodes = function() {
	var result = [];
	if(this.left != null) {
		result.push('left');
	}
	if(this.right != null) {
		result.push('right');
	}
	return result;
}

Node.prototype.remove = function() {
	var branches = this.whichNodes();

	if(branches.length == 0) {
		if(this.parent.left.value == this.value) {
			this.parent.setLeft(null);
		}else if(this.parent.right.value == this.value) {
			this.parent.setRight(null);
		}						
	}else if(branches.length == 1) {
		this.parent[branches[0]] = this[branches[0]];
	}else {
		var minNode = this.right.minNode();
		this.value = minNode.value;
		minNode.remove();
	}
}

Node.prototype.minNode = function() {
	if(this.left == null) {
		return this;
	}else {
		return this.left.minNode();
	}
}

Node.prototype.minValue = function() {
	return this.minNode().value;
}

Node.prototype.maxNode = function() {
	if(this.right == null) {
		return this;
	}else {
		return this.right.maxNode();
	}
}

Node.prototype.maxValue = function() {
	return this.maxNode().value;
}