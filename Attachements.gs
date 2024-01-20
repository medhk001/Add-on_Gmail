function attachements(attachments) {
  
      for (var k = 0; k < attachments.length; k++) {
        var attachment = attachments[k];
        var folderName = "Your_Folder_Name"; // Replace with the desired folder name
        var folderId = createFolderIfNotExists(folderName);
        var file = DriveApp.createFile(attachment);
        file.moveTo(DriveApp.getFolderById(folderId));
      }
}