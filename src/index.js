const fs = require("fs");
const path = require("path");

const TYPES = {
  directory: "directory",
  file: "file"
};

/**
 * This function allow gets file tree based in path.
 *
 * @example
 * const getFileTree = require('filetree-ontech');
 * const exampleDirectory = './example';
 * const tree = getFileTree(exampleDirectory);
 *
 * @param {string} basePath - Base path to gets file tree.
 *
 * @returns {Object} Object with file tree structure.
 * E.g.: {
 *  "path":"../example",
 *  "name":"example",
 *  "size":96,
 *  "type":"directory",
 *  "children":[
 *     {
 *        "path":"../example/dir1",
 *        "name":"dir1",
 *        "size":96,
 *        "type":"directory",
 *        "children":[
 *           {
 *              "path":"../example/dir1/file.txt",
 *              "name":"file.txt",
 *              "size":0,
 *              "extension":".txt",
 *              "type":"file"
 *           }
 *        ]
 *     }
 *  ]
 * }
 */
function getFileTree(basePath) {
  if (!fs.existsSync(basePath)) {
    return {};
  }

  const stats = fs.lstatSync(basePath);
  const node = {
    path: basePath,
    name: path.basename(basePath),
    size: stats.size
  };

  if (stats.isDirectory()) {
    node.type = TYPES.directory;
    node.children = fs
      .readdirSync(basePath)
      .map(child => getFileTree(`${basePath}/${child}`));
    return node;
  }

  node.extension = path.extname(basePath);
  node.type = TYPES.file;
  return node;
}

module.exports = getFileTree;
