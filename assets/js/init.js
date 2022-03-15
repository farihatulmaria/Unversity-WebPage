/* dom */
const coursesSection = document.querySelector('.courses .row');
const campusSection = document.querySelector('.campus .row');
const facilitiesSection = document.querySelector('.facilities .row');
const navbar = document.querySelector('.navbar');

// load all data in one function
const loadAllDate = () => {
    const dataUrl = `assets/data/data.json`;
    fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
        displayCourses(data.courseInfos);
        displayCampus(data.campuses);
        displayFacilities(data.facilities);       
    })
    .catch(error => console.log(error));
}

const displayCourses = (courses) => {
    courses.forEach((course) => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="course-info">
                <h3>${course.title}</h3>
                <p>${course.desc}</p>
            </div>
        `
        coursesSection.appendChild(div)
    })
}

const displayCampus = (campuses) => {
    campuses.forEach((campus) => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <img src="${campus.src}" alt="${campus.title}" class="img-fluid" />
            <div class="layer">
                <h3 class="text-white">${campus.title}</h3>
            </div>
   
        `
        campusSection.appendChild(div)
    })
}
const displayFacilities = (allFacilities) => {
    allFacilities.forEach((facilities) => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <img src="${facilities.src}" alt="${facilities.title}" class="img-fluid" />
            <div class="facilitie-desc my-3">
                <h4>${facilities.title}</h4>
                <p>${facilities.desc}</p>
            </div>
        `
        facilitiesSection.appendChild(div)
    })
}



// calling the main data function
loadAllDate();



// click to scroll up and bottom
   
$(window).scroll(function() {
    if($(this).scrollTop() > 200) {
        $('#scroll-to-top').fadeIn('slow');
    } else {
        $('#scroll-to-top').fadeOut('slow');
    }
    if ($(this).scrollTop() > $(document).height() - screen.height) {
         $('#scroll-to-bottom').fadeOut('slow');
    } else {
        $('#scroll-to-bottom').fadeIn('slow');
    }
 
 });      
$('.scroll-to-top').click(function(){
    $("html,body").animate({
        scrollTop:0
    },300);
    return false;
});


window.addEventListener('scroll', function(){
    navbar.classList.toggle('sticky', window.scrollY > 0)
})

