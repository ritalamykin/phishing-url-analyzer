function markLinks() {
    var links = document.getElementsByTagName('a');
    // var links = document.getElementsByName("(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?\/[a-zA-Z0-9]{2,}")
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var emTag = document.createElement('em');
        emTag.innerHTML = link.innerHTML;
        // if (link.innerHTML == 'https://www.sdtek.net/malicious-urls-and-how-to-fight-them'){
        //     emTag.style.backgroundColor = '#ffc6b3'
        // }
        if (link.innerHTML.length%11 == 0) {
            emTag.style.backgroundColor = '#ffc6b3';
        } 
        // else {
        //     emTag.style.backgroundColor = '#b3e6b3'
        // }
        link.innerHTML = '';
        link.appendChild(emTag);
    }
}
// // Run the function when the page finishes loading
window.addEventListener('load', markLinks);


// const links = scrapeWebPage();
// console.log('Links:', links);

// function scrapeWebPage() {
//     try {
//       const links = [];
//       const anchorElements = document.getElementsByTagName('a');
//       for (let i = 0; i < anchorElements.length; i++) {
//         const href = anchorElements[i].getAttribute('href');
//         if (href) {
//           links.push(href);
//         }
//       }
      
//       return links;
//     } catch (error) {
//       console.error('Error scraping web page:', error);
//       return [];
//     }
//   }
  
