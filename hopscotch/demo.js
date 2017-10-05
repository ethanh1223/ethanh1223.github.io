
    // Define the tour!
    var tour = {
      id: "hello-hopscotch",
      steps: [
        {
          title: "My Header",
          content: "This is the header of my page.",
          target: document.querySelector('#infoSection'),
          placement: "right"
        },
        {
          title: "My content",
          content: "Here is where I put my content.",
          target: document.querySelector("#githubIcon"),
          placement: "right"
        }
      ]
    };

    // Start the tour!
    

    window.addEventListener('DOMContentLoaded', () => {
      hopscotch.startTour(tour);  
      console.log('dom loaded')
    })