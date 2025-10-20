// State management
let participants = [];

// DOM elements
const fileUpload = document.getElementById('fileUpload');
const fileInfo = document.getElementById('fileInfo');
const selectWinnerBtn = document.getElementById('selectWinnerBtn');
const clearBtn = document.getElementById('clearBtn');
const participantsList = document.getElementById('participantsList');
const participantCount = document.getElementById('participantCount');
const animationContainer = document.getElementById('animationContainer');
const shufflingNames = document.getElementById('shufflingNames');
const winnerAnnouncement = document.getElementById('winnerAnnouncement');
const winnerName = document.getElementById('winnerName');
const closeWinnerBtn = document.getElementById('closeWinnerBtn');

// Event listeners
fileUpload.addEventListener('change', handleFileUpload);
selectWinnerBtn.addEventListener('click', startWinnerSelection);
clearBtn.addEventListener('click', clearAllParticipants);
closeWinnerBtn.addEventListener('click', closeWinnerAnnouncement);

// Handle file upload
function handleFileUpload(event) {
    const file = event.target.files[0];
    
    if (!file) {
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const content = e.target.result;
        parseParticipants(content);
        fileInfo.textContent = `File loaded: ${file.name}`;
    };
    
    reader.onerror = function() {
        fileInfo.textContent = 'Error reading file';
        alert('Error reading file. Please try again.');
    };
    
    reader.readAsText(file);
}

// Parse participants from file content
function parseParticipants(content) {
    // Split by newlines and filter out empty lines
    const lines = content.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);
    
    participants = lines;
    updateUI();
}

// Update UI with current participants
function updateUI() {
    participantCount.textContent = participants.length;
    
    // Enable/disable buttons based on participants count
    const hasParticipants = participants.length > 0;
    selectWinnerBtn.disabled = !hasParticipants;
    clearBtn.disabled = !hasParticipants;
    
    // Display participants list
    if (participants.length === 0) {
        participantsList.innerHTML = '<p style="color: #999; text-align: center;">No participants yet. Upload a file to get started.</p>';
    } else {
        participantsList.innerHTML = participants
            .map((p, index) => `<div class="participant-item">${index + 1}. ${p}</div>`)
            .join('');
    }
}

// Start winner selection with animation
function startWinnerSelection() {
    if (participants.length === 0) {
        return;
    }
    
    // Disable buttons during selection
    selectWinnerBtn.disabled = true;
    clearBtn.disabled = true;
    
    // Show animation container
    animationContainer.classList.remove('hidden');
    
    // Shuffle names for 5 seconds
    let shuffleInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * participants.length);
        shufflingNames.textContent = participants[randomIndex];
    }, 100);
    
    // After 5 seconds, select the final winner
    setTimeout(() => {
        clearInterval(shuffleInterval);
        const winnerIndex = Math.floor(Math.random() * participants.length);
        const winner = participants[winnerIndex];
        
        // Hide animation container
        animationContainer.classList.add('hidden');
        
        // Show winner announcement
        winnerName.textContent = winner;
        winnerAnnouncement.classList.remove('hidden');
        
        // Re-enable buttons
        selectWinnerBtn.disabled = false;
        clearBtn.disabled = false;
    }, 5000);
}

// Clear all participants
function clearAllParticipants() {
    if (confirm('Are you sure you want to clear all participants?')) {
        participants = [];
        updateUI();
        fileInfo.textContent = 'No file selected';
        fileUpload.value = '';
    }
}

// Close winner announcement
function closeWinnerAnnouncement() {
    winnerAnnouncement.classList.add('hidden');
}

// Initialize UI on page load
updateUI();
