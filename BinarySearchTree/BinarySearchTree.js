function BinarySearchTree() {
	this.root = null;
}

BinarySearchTree.prototype.insert = function(value) {
	if(this.root == null) {
		this.root = new Node(value);
	}else {
		this.insertWithNode(this.root, value);
	}
}

BinarySearchTree.prototype.insertWithNode = function(node, value) {
	if(node.value !== value) {
		if( value < node.value) {
			if(node.left == null) {
				node.setLeft( new Node(value) );
			}else {
				this.insertWithNode(node.left, value);
			}
		}else {
			if( node.right == null) {
				node.setRight( new Node(value) );
			}else {
				this.insertWithNode(node.right, value);
			}
		}
	}
}

BinarySearchTree.prototype.remove = function(value) {
	var node = this.lookup(value);
	if(node != null) {
		return node.remove();
	}
	return false;
}

BinarySearchTree.prototype.exists = function(value) {
	return this.lookup(value) != null;
}

BinarySearchTree.prototype.lookup = function(value) {	
	return this.lookupWithNode(this.root, value);
}

BinarySearchTree.prototype.lookupWithNode = function(node, value) {
	if(node == null) {
		return null;
	}else if(node.value == value) {
		return node;
	}

	if(value < node.value) {
		return this.lookupWithNode(node.left, value);
	}else {
		return this.lookupWithNode(node.right, value);
	}					
}

BinarySearchTree.prototype.print = function() {

}