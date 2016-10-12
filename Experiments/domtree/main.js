var dom1 = document.getElementById('dom1');
var dom2 = document.getElementById('dom2');

var node1 = document.getElementById('node1');
var node2 = document.getElementById('node2');

NodeList.prototype.indexOf = function(value) {
    return Array.prototype.indexOf.call(this, value);
};

function buildPath(rootNode, targetNode, path) {
    path = path || [];

    if(rootNode != targetNode) {
        var parentNode = targetNode.parentNode;
        if(parentNode) {
            var idx = parentNode.childNodes.indexOf(targetNode);
            path.push(idx);
            buildPath(rootNode, parentNode, path);
        }
    }


    return path;
}

function getFromPath(rootNode, path) {
    var node = rootNode;

    while(path.length > 0) {
        var idx = path.pop();
        node = node.childNodes[idx];
    }

    return node;
}


console.log(node1.innerText);

var path = buildPath(dom1, node1);
console.log(getFromPath(dom2, path).innerText);
