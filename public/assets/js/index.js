document.getElementById('proxy-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const url = document.getElementById('url-input').value;
            window.location.href = '/gt/' + __uv$config.encodeUrl(url);
        });
