export default ({ title, slug }) => `
<!DOCTYPE html>
<html>
  <!-- Rest of your template remains the same -->
  <head>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Roboto:wght@400;700&display=swap');
      body {
        margin: 0;
        padding: 60px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
        color: white;
        font-family: 'Inter', sans-serif;
      }
      .container {
        width: 100%;
        max-width: 900px;
        text-align: center;
      }
      h1 {
        font-size: 3.5rem;
        line-height: 1.2;
        margin: 0 0 1rem;
        text-shadow: 0 2px 10px rgba(0,0,0,0.2);
      }
      .url {
        position: absolute;
        bottom: 40px;
        right: 60px;
        font-size: 1.2rem;
        opacity: 0.8;
        font-family: 'Roboto', sans-serif;
      }
      .author {
        position: absolute;
        bottom: 40px;
        left: 60px;
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: 'Roboto', sans-serif;
      }
      .author-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba(255,255,255,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.5rem;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>${title}</h1>
    </div>
    <div class="url">pranav-k-jha.github.io</div>
    <div class="author">
      <div class="author-avatar">PK</div>
      <div>
        <div style="font-weight: bold;">Pranav K Jha</div>
        <div style="opacity: 0.8; font-size: 0.9rem;">AI Engineer</div>
      </div>
    </div>
  </body>
</html>
`;
