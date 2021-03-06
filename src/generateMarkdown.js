const divs = []
const generateMarkdown=(teamMembers)=>{
teamMembers.forEach((member)=>{
    if(member.getRole() === 'Manager'){
        
        divs.push(`<div class='col-4 mt-4'>
        <div class="card h-100">
            <div class="card-header">
                <h3>${member.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p>ID: ${member.id}</p>
                <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
                <p>Office Number: ${member.officeNumber}</p>
            </div>
        </div>
    </div>`)
        
    }
    if(member.getRole() === 'Engineer'){
        
        divs.push(`<div class='col-4 mt-4'>
        <div class="card h-100">
            <div class="card-header">
                <h3>${member.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p>ID: ${member.id}</p>
                <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
                <p>GitHub: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a></p>
            </div>
        </div>
    </div>`)

        
    }
    if(member.getRole() === 'Intern'){
        
        divs.push(`<div class='col-4 mt-4'>
        <div class="card h-100">
            <div class="card-header">
                <h3>${member.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p>ID: ${member.id}</p>
                <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
                <p>School: ${member.school}</p>
            </div>
        </div>
    </div>`)

        
    }
})
return generateHTML()

}

const generateHTML = ()=>{
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">

    <title>Document</title>
</head>
<body>
    <header>
        <nav class="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    ${divs.join('')}
                </div>
            </div>
        </main>
    </header>    

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</body>
</html>`
}

module.exports = generateMarkdown