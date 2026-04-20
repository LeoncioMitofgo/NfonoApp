const titles = {
    dashboard: ['Dashboard', "Good morning — here's your overview"],
    schools: ['Schools', 'Manage your schools'],
    classes: ['Classes', 'Manage your classes'],
    students: ['Students', 'Manage your students'],
    grades: ['Grades', 'Track grades & marks'],
    topics: ['Topics', 'Curriculum & topics tracker'],
    todo: ['To-Do', 'Tasks & reminders']
}

function showSection(id, el) {
    document.querySelectorAll('[id^="section-"]').forEach(s => s.style.display = 'none')
    document.getElementById('section-' + id).style.display = ''
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'))
    el.classList.add('active')
    document.querySelector('#topbar-title h2').textContent = titles[id][0]
    document.getElementById('topbar-sub').textContent = titles[id][1]
}