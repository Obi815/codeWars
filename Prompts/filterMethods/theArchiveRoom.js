// The Archive Room

// An old archive stores document labels in an array.
//
// Some labels are damaged or invalid.
//
// A valid document label:
// - must be a string
// - must end with ".doc"
// - cannot contain spaces
//
// Return a new array where all valid document names are converted
// into filenames without the ".doc" extension.
//
// The original order must remain unchanged.


// Example

// Input:
// [
//   "report.doc",
//   "draft.txt",
//   "final copy.doc",
//   404,
//   "summary.doc"
// ]

// Output:
// [
//   "report",
//   "summary"
// ]


// Method:
    // Filter and Mapping 
        // Check for spaces - .includes(' ')
        // Check for string - typeOf 
        // 

// Approach:
    // Then I filter the files to keep only:
        // strings
        // files ending with '.doc'
        // files without spaces
    // Then I map the files and remove the '.doc' extension

// Write a function:

function archiveFiles(files) {
    return files
        .filter(file => typeof file === 'string' && !file.includes(' ') && file.endsWith('.doc'))
        .map(file => file.split('.')[0])
        // .map(file => file.replace('.doc', '')) also works
}