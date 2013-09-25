describe("BinarySearchTree", function() {
	var tree;

	beforeEach(function() {
		//see http://goo.gl/nZ0jHL for a visual
		tree = new BinarySearchTree();

		tree.insert(5);
		tree.insert(2);
		tree.insert(-4);
		tree.insert(3);
		tree.insert(12);
		tree.insert(9);
		tree.insert(21);
		tree.insert(19);
		tree.insert(25);
	});

	it("should remove node with zero children", function() {
		
		expect(tree.exists(-4)).toBeTruthy();
		expect(tree.exists(9)).toBeTruthy();
		tree.remove(-4);
		tree.remove(9);
		
		expect(tree.exists(5)).toBeTruthy();
		expect(tree.exists(2)).toBeTruthy();
		expect(tree.exists(-4)).toBeFalsy();
		expect(tree.exists(3)).toBeTruthy();
		expect(tree.exists(12)).toBeTruthy();
		expect(tree.exists(9)).toBeFalsy();
		expect(tree.exists(21)).toBeTruthy();
		expect(tree.exists(19)).toBeTruthy();
		expect(tree.exists(25)).toBeTruthy();


		tree.insert(-4);
		tree.insert(9);
		expect(tree.exists(5)).toBeTruthy();
		expect(tree.exists(2)).toBeTruthy();
		expect(tree.exists(-4)).toBeTruthy();
		expect(tree.exists(3)).toBeTruthy();
		expect(tree.exists(12)).toBeTruthy();
		expect(tree.exists(9)).toBeTruthy();
		expect(tree.exists(21)).toBeTruthy();
		expect(tree.exists(19)).toBeTruthy();
		expect(tree.exists(25)).toBeTruthy();
	});

	it("should remove node with one child", function() {
		tree.remove(9);
		expect(tree.exists(9)).toBeFalsy();

		tree.remove(12);
		
		expect(tree.exists(5)).toBeTruthy();
		expect(tree.exists(2)).toBeTruthy();
		expect(tree.exists(-4)).toBeTruthy();
		expect(tree.exists(3)).toBeTruthy();
		expect(tree.exists(12)).toBeFalsy();
		expect(tree.exists(9)).toBeFalsy();
		expect(tree.exists(21)).toBeTruthy();
		expect(tree.exists(19)).toBeTruthy();
		expect(tree.exists(25)).toBeTruthy();

		tree.insert(12);
		
		expect(tree.exists(5)).toBeTruthy();
		expect(tree.exists(2)).toBeTruthy();
		expect(tree.exists(-4)).toBeTruthy();
		expect(tree.exists(3)).toBeTruthy();
		expect(tree.exists(12)).toBeTruthy();
		expect(tree.exists(9)).toBeFalsy();
		expect(tree.exists(21)).toBeTruthy();
		expect(tree.exists(19)).toBeTruthy();
		expect(tree.exists(25)).toBeTruthy();
	});


	it("should remove node with two children", function() {
		
		expect(tree.exists(12)).toBeTruthy();
		expect(tree.exists(2)).toBeTruthy();
		tree.remove(12);
		tree.remove(2);
		
		expect(tree.exists(5)).toBeTruthy();
		expect(tree.exists(2)).toBeFalsy();
		expect(tree.exists(-4)).toBeTruthy();
		expect(tree.exists(3)).toBeTruthy();
		expect(tree.exists(12)).toBeFalsy();
		expect(tree.exists(9)).toBeTruthy();
		expect(tree.exists(21)).toBeTruthy();
		expect(tree.exists(19)).toBeTruthy();
		expect(tree.exists(25)).toBeTruthy();

		tree.insert(12);
		tree.insert(2);

		expect(tree.exists(5)).toBeTruthy();
		expect(tree.exists(2)).toBeTruthy();
		expect(tree.exists(-4)).toBeTruthy();
		expect(tree.exists(3)).toBeTruthy();
		expect(tree.exists(12)).toBeTruthy();
		expect(tree.exists(9)).toBeTruthy();
		expect(tree.exists(21)).toBeTruthy();
		expect(tree.exists(19)).toBeTruthy();
		expect(tree.exists(25)).toBeTruthy();
	});

	it('should remove root node', function() {
		expect(tree.exists(5)).toBeTruthy();
		
		tree.remove(5);
		
		expect(tree.exists(5)).toBeFalsy();
		expect(tree.exists(2)).toBeTruthy();
		expect(tree.exists(-4)).toBeTruthy();
		expect(tree.exists(3)).toBeTruthy();
		expect(tree.exists(12)).toBeTruthy();
		expect(tree.exists(9)).toBeTruthy();
		expect(tree.exists(21)).toBeTruthy();
		expect(tree.exists(19)).toBeTruthy();
		expect(tree.exists(25)).toBeTruthy();

		tree.insert(5);

		expect(tree.exists(5)).toBeTruthy();
		expect(tree.exists(2)).toBeTruthy();
		expect(tree.exists(-4)).toBeTruthy();
		expect(tree.exists(3)).toBeTruthy();
		expect(tree.exists(12)).toBeTruthy();
		expect(tree.exists(9)).toBeTruthy();
		expect(tree.exists(21)).toBeTruthy();
		expect(tree.exists(19)).toBeTruthy();
		expect(tree.exists(25)).toBeTruthy();
	});

});