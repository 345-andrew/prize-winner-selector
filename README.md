# Prize Winner Selector 🎁

A simple web application for randomly selecting prize winners from a list of participants.

## Features

- 📂 Upload participant list from a text file (one participant per line)
- 🎲 Random winner selection with exciting 5-second animation
- 🎉 Beautiful winner announcement display
- 🗑️ Clear all participants with confirmation
- 📱 Responsive design with smooth animations

## Usage

1. Open `index.html` in a web browser
2. Click "Upload Participants File" and select a text file with participant names (one per line)
3. Click "Select Winner" to start the random selection process
4. Watch the 5-second animation as names shuffle
5. See the winner announcement!
6. Click "Clear All Participants" to reset the list when needed

## Running the Application

### Option 1: Open directly in browser
Simply open `index.html` in your web browser.

### Option 2: Use a local web server
```bash
# Using Python 3
python3 -m http.server 8080

# Using Python 2
python -m SimpleHTTPServer 8080

# Using Node.js (with http-server package)
npx http-server -p 8080
```

Then navigate to `http://localhost:8080` in your browser.

## File Format

Create a text file with one participant name per line:

```
Alice Johnson
Bob Smith
Charlie Brown
Diana Prince
```

## Screenshots

### Initial State
![Initial State](https://github.com/user-attachments/assets/b1033f85-aad9-400f-b69e-6a0acdac6950)

### Participants Loaded
![Participants Loaded](https://github.com/user-attachments/assets/c7272b95-f6f6-4279-aad4-555aec25f069)

### Winner Announcement
![Winner Announcement](https://github.com/user-attachments/assets/99378776-e537-4b93-a62f-1e8b86f6d3e8)

## Technologies Used

- HTML5
- CSS3 (with animations and gradients)
- Vanilla JavaScript (no dependencies)

## License

See LICENSE file for details.