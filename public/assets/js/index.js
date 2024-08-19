function encodeUrl(url) {
          return btoa(url); // encode
      }
       document.getElementById('proxy-form').addEventListener('submit', function(event) {
          event.preventDefault();
           const url = document.getElementById('url-input').value;
           const encodedUrl = encodeUrl(url);            window.location.href = '/gt/' + encodedUrl;      
       });
