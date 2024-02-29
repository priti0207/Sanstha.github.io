fetch('header.html')
        .then(response => response.text())
        .then(text => document.getElementById('includedContent').innerHTML = text);
        
        
        
        
        
        fetch('footer.html')
        .then(response => response.text())
        .then(text => document.getElementById('includedContent1').innerHTML = text);



    function checkAndOpenPopup() {
        var name = document.getElementById('name').value;
        var phoneNumber = document.getElementById('phone').value;

        // Check if the name is not empty and if the phone number is 10 digits
        if (name.trim() !== "" && phoneNumber.length === 10) {
            document.getElementById('overlay').style.display = 'flex';
                document.body.style.overflow = 'hidden'; /* Disable scrolling */
        } else {
            alert("Please enter a valid name and a valid 10-digit phone number.");
        }
    }

    function closePopup() {
        document.getElementById('overlay').style.display = 'none';
             document.body.style.overflow = 'auto'; /* Enable scrolling */
    }


