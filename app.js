// Function to send a browser alert
function sendAlert() {
    const alertMessage = "Don't miss out! New attractions are available in the city!";


    alert(alertMessage);

    // Display the alert message in the app's UI
    const alertContainer = document.getElementById('alert-messages');
    const message = document.createElement('p');
    message.textContent = alertMessage;
    alertContainer.appendChild(message);
}

// Function to send a notification
function sendNotification() {
    if (Notification.permission === "granted") {
        // Create a notification
        new Notification("Tourism App", {
            body: "New exciting places to visit are waiting for you!",
            icon: "https://via.placeholder.com/100",
            tag: "tourism-notification"
        });
    } else if (Notification.permission !== "denied") {
        // Ask for permission to show notifications
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("Tourism App", {
                    body: "Thanks for enabling notifications! Get ready for exciting travel info.",
                    icon: "https://via.placeholder.com/100",
                    tag: "tourism-notification"
                });
            }
        });
    }
}

// Sample function to simulate a scheduled notification or event
function scheduleNotification() {
    setInterval(() => {
        sendNotification();
    }, 60000); // Send notification every 1 minute
}

// Call this function when the page loads to start scheduling notifications
scheduleNotification();