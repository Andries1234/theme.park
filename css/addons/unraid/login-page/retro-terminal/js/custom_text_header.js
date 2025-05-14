
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
   ____                                  _    
  / __ \\____  _________  ___  __________(_)__ 
 / / / / __ \\/ ___/ __ \\/ _ \\/ ___/ ___/ / _ \\
/ /_/ / / / (__  ) / / /  __(__  |__  ) /  __/
\\____/_/ /_/____/_/ /_/\\___/____/____/_/\\___/ 
                                              
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
