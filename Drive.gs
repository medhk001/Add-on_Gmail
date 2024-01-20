function createFolderIfNotExists(folderName) {
  var folder;
  var folderName = folderName
  var existingFolders = DriveApp.getFoldersByName(folderName);

  if (existingFolders.hasNext()) {
    folder = existingFolders.next();
  } else {
    folder = DriveApp.createFolder(folderName);
  }
 
  return folder.getId();
}
