function getFileName(file) {
    
    let dotIndex = file.indexOf('.');

    if (dotIndex !== -1) {
       
        return file.slice(0, dotIndex);
    } else {
      
        return file;
    }
}
getFileName("styles.css")
getFileName("app.js")