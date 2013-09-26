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
	return this.in_order_traversal(this.root);
}

BinarySearchTree.prototype.in_order_traversal = function(node) {
	//left, root, right
	var stack = [],
		current = node,
		done = false,
		result = [];

	while(!done) {
		if(current != null) {
			stack.push(current);
			current = current.left;
		}else {
			if(stack.length == 0) {
				done = true;
			}else {
				current = stack.pop();
				result.push(current.value);
				current = current.right;
			}
		}
	}
	return result;
}


BinarySearchTree.prototype.pre_order_traversal = function(node) {
	//root, left, right
	var stack = [],
		current = node,
		done = false,
		result = [];

	while(!done) {
		if (current != null) {
			result.push(current.value);
			if(current.right != null) {
				stack.push(current.right);	
			}
			current = current.left;
		}else {
			if(stack.length == 0) {
				done = true;
			}else {
				current = stack.pop();	
			}
		}
	}

	return result;
}

BinarySearchTree.prototype.post_order_traversal = function(node) {
	//left, right, root
	var stack = [],
		current = node,
		prev = null,
		result = [];

	stack.push(current);
	while(stack.length > 0) {
		current = stack[stack.length-1];
		if(prev == null || prev.left == current || prev.right == current) {
			if(current.left != null) {
				stack.push(current.left);
			}else if(current.right != null) {
				stack.push(current.right);
			}
		}else if(current.left == prev) {
			if(current.right != null) {
				stack.push(current.right);
			}
		}else {
			result.push(current.value);
			stack.pop();
		}
		prev = current;
	}

	return result;
}






















