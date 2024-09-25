
function showSection(section){
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    })
    
    document.querySelector(`#${section}`).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('a').forEach(a => {
        a.onclick = function(){
            showSection(this.dataset.section);
        };
    });
});
