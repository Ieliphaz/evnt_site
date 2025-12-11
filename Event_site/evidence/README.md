#UPLOAD 2

Project: Community Event Site

Upload Number: 2  -->Semantic html and A11y

Team members and roles: 1) Igiraneza Eliphaz (ID: 673344) Leader
                        2) Paras Girish Khatiya (ID:673972)
                        3) Darren Murule (ID:673818)
                        4) Brian Mutua (ID:672299)
Self-assessment: Tried
What went well: Keyboard-only walkthrough and A11y features 
Next week: CSS layout and responsive design

# Code snippet for semantic structure, form native validation and A11y 

<header> <nav></nav></header>
<main id="main-content">
  <h1>Speakers</h1>
  <section>
    <article>
      <figure>
        <img src="images/speaker1.jpg" alt="nnnnnnnnnnnnnnn">
        <figcaption>ttttttttttttttttt</figcaption>
      </figure>
      <p>nnnnnnnnnnnnnnnnnnnnnnnnnnn.</p>
    </article>
  </section>
  <section>
    <h2>Speakers</h2>
    <article>
      <figure>
        <img src="images/speaker2.jpg" alt="xxxxxxxxxxxxxxxxx">
        <figcaption>yyyyyyyyyyyyyyyyy</figcaption>
      </figure>
      <p>Founder of a tech startup supporting youth.</p>
    </article>
  </section>
</main>

#form

<form>
  <label for="name">Full Name</label>
  <input id="name" name="name" required minlength="3">

  <label for="email">Email</label>
  <input id="email" type="email" name="email" required>

  <label for="ticket">Ticket Type</label>
  <select id="ticket" name="ticket" required>
    <option value="xxxxxxxx">xxxxxxx</option>
    <option value="xxxxxxxxxx">xxxxxxxxx</option>
    <option value="xxxxxxxxxxx">xxxxxx</option>
  </select>

  <button type="register">Register</button>
</form>

#Keyboard-only walkthrough (Keyboard navigation) for accessibility purpose

1.	Skip Link
	Added <a href="#main-content" class="skip-link">Skip to main content</a> for keyboard users.
	Works: pressing Tab at page load displays the link; Enter jumps to main content.
2.	Focusable Sections
	Added tabindex="0" on <main>, <section>, and <article> elements.
	Users can navigate content logically with Tab and Shift + Tab.

3.	Access Keys for Navigation
	Assigned access keys to main navigation links:
	Home: Alt+Shift+H
	Schedule: Alt+Shift+S
	Speakers: Alt+Shift+P
	Venue: Alt+Shift+V
	Register: Alt+Shift+R
	Works on most browsers for quick navigation.
4 .	Form Label Association
	All inputs in the registration form have <label> elements linked via for attribute.
	Users can navigate form fields with Tab, and screen readers announce labels correctly.
5. tabindex for keyboard focus order

 #3 Known Accessibility Issues

1.	Focus Ring on Select Dropdowns (Browser Dependent)
	Some browsers (especially Safari) do not show focus outline on <select> elements.
	Workaround requires custom styling or JS.

2.	Skip Link Visibility Timing
	On very fast keyboard users, the skip link may appear only briefly before the first element is focused.
	Could be improved with additional CSS transition, not yet applied.

3.	Access Keys Conflicts
	Access keys may conflict with browser or OS shortcuts on some systems.


