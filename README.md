# FileTree Ontech
This npm allows generate file tree, based in specific path.

# Usage example

```js
const getFileTree = require('filetree-ontech');
const fileTree = getFileTree('./example');
```

## Output Example

```json
{
   "path":"../example",
   "name":"example",
   "size":96,
   "type":"directory",
   "children":[
      {
         "path":"../example/dir1",
         "name":"dir1",
         "size":96,
         "type":"directory",
         "children":[
            {
               "path":"../example/dir1/file.txt",
               "name":"file.txt",
               "size":0,
               "extension":".txt",
               "type":"file"
            }
         ]
      }
   ]
}
```
