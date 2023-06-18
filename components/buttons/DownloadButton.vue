<template>

        <a target="_blank"  @click="downloadFile">Download</a>
  </template>
  
  <script>
  export default {
    name: "DownloadButton",
    methods: {
      downloadFile() {
        // Create a file URL or fetch the file from a server
        const fileUrl = 'https://drive.google.com/file/d/1GTX1QG9z74xGnnYDYNa9d5P8PE6bHMQB/view?usp=drive_link';
  
        // Create a link element
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'filename.pdf');
        link.style.display = 'none';
  
        // Append the link element to the document body
        document.body.appendChild(link);
  
        // Simulate a click event to trigger the download
        link.click();
  
        // Clean up by removing the link element
        document.body.removeChild(link);
      }
    }
  };
  </script>
  