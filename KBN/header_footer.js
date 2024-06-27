fetch('header.html')
        .then(response => response.text())
        .then(text => document.getElementById('includedContent').innerHTML = text);
        
        
        
        
        
        fetch('footer.html')
        .then(response => response.text())
        .then(text => document.getElementById('includedContent1').innerHTML = text);