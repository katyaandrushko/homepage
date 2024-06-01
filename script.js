document.addEventListener('DOMContentLoaded', () => {
   const skills = [
      'HTML/CSS/SCSS',
      'JavaScript(ES6)',
      'React JS',
      'Next.js',
      'Git',
      'GitHub',
      'Redux',
      'Figma',
      'Tailwind',
      'Corezoid',
      'Postman',
      'SQL',
      'TypeScript',
   ]

   const skillsList = document.querySelector('.skills__list')

   skills.forEach((skill) => {
      const skillItem = document.createElement('span')
      skillItem.classList.add('skill-item')
      skillItem.textContent = skill
      skillsList.appendChild(skillItem)
   })
})
