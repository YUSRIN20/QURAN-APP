# Al-Quran Ayah Details Web Application

This is a web application built to display details of Quranic verses (Ayahs) using data fetched from the REST Countries API. The application dynamically creates DOM elements using HTML, CSS, and JavaScript, incorporating Bootstrap for styling and responsive design. It also includes error handling mechanisms.

## Demo:

Check out the live demo [here](https://al-quran-site.netlify.app/)

#### Features:

1. **Fetch Data from API:**
   - Utilizes the Fetch API to retrieve Quranic data from the Al-Quran Cloud API.
   - Displays a loading spinner while fetching data to indicate to the user that the page is loading.

2. **Dynamic DOM Creation:**
   - Dynamically creates HTML elements to display the fetched Quranic data.
   - Uses Bootstrap for styling and layout.

3. **Displaying Surahs:**
   - Renders a list of Surahs (chapters) of the Quran with their English and Arabic names.
   - Each Surah is presented as a card with a button to view its Ayahs.

4. **Viewing Ayahs:**
   - Allows users to click on a "Get surah" button to view the Ayahs (verses) of a particular Surah.
   - Displays Ayahs in a popup box upon button click.
   - Provides a "Back" button to return to the list of Surahs.

5. **Responsive Design:**
   - Ensures a responsive layout that adapts to various screen sizes, making it accessible on both desktop and mobile devices.


#### File Structure:

- **index.html:** Contains the HTML structure of the web application.
- **style.css:** Defines the styles for various HTML elements using CSS, including Bootstrap classes.
- **script.js:** Implements the application logic, including fetching data from the API, dynamically creating DOM elements, handling user interactions, and error handling.
- **README.md:** This document provides an overview of the application, its features, file structure, and usage instructions.

#### Usage:

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Explore the Surahs listed and click on the "Get surah" button to view the Ayahs of a particular Surah.
4. Use the "Back" button to return to the list of Surahs.
5. Enjoy exploring Quranic verses with ease and convenience!

#### Contributors:

- [Your Name/Username] - [Link to GitHub/Portfolio]

#### License:

This project is licensed under the [MIT License](LICENSE).

For any questions or issues, please feel free to contact [Your Email Address].

---

Feel free to customize this README according to your preferences, adding more details or sections as needed.
