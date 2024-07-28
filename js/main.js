document.onload = loadChapter(1);

document.querySelectorAll('.aside-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.aside-link').forEach(link => {
      link.classList.remove('selected');
    });
    this.classList.add('selected');

    const chapter = this.innerHTML.split(' ')[1];

    loadChapter(chapter);

    const oldScript = document.querySelector('.data-chapter-script');
    if (oldScript) {
      oldScript.remove();
    }

    const script = document.createElement('script');
    script.src = `./js/chapters/chapter-${chapter}.js`;
    script.classList.add('data-chapter-script');
    document.body.appendChild(script);
  });
});

document.getElementById('aside-toggle').addEventListener('click', () => {
  const asideContent = document.getElementById('aside-content');
  const aside = document.getElementById('aside');
  const content = document.getElementById('content');
  if (window.innerWidth < 768) {
    asideContent.classList.toggle('hidden');
    if (aside.classList.contains('w-20')) {
      aside.classList.replace('w-20', 'w-64');
    } else {
      aside.classList.replace('w-64', 'w-20');
    }
  } else {
    asideContent.classList.toggle('md:block');
    if (aside.classList.contains('md:w-64')) {
      aside.classList.replace('md:w-64', 'w-20');
      content.classList.replace('md:ml-64', 'md:ml-20');
    } else {
      aside.classList.replace('w-20', 'md:w-64');
      content.classList.replace('md:ml-20', 'md:ml-64');
    }
  }
});

async function loadChapter(chapterId) {
  const content = document.getElementById('content');
  try {
    const response = await fetch(`./chapters/chapter-${chapterId}.json`);
    const chapter = await response.json();
    content.innerHTML = chapter.problems.map(problem => createProblem(problem)).join('');
  } catch (error) {
    content.innerHTML = `<div class="text-red-500">Not Found</div>`;
  }
}

function createProblem(problem) {
  return `
    <div class="border border-gray-300 p-6 rounded-md mb-6">
      <div class="flex justify-between">
        <h3 class="font-bold text-2xl mb-4">${problem.title}</h3>
        <svg id="toggle-button" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div>
      ${problem.content ? `<p class='max-w-3xl'>${problem.content}
      ${problem.inputs ? `
          ${problem.inputs.map(input => `
            ${input.name} = <input id="p${problem.id}-${input.id}" type="${input.type}" /> ${input.unit}
          `).join(', ')}
      </p>` : ''}` : ''}
        ${problem.parts.map(part => createPart(part, problem.id)).join('<hr />')}
      </div>
    </div>
  `;
}

function createPart(part, problemId) {
  return `
    <div class="problem-part">
      <div class="space-y-4 flex-1">
        <p>
          <span class="font-bold text-lg">${part.title}</span>
          <br />
          ${part.description ? part.description : ''}
          </p>
          <p class="leading-9">
          ${part.content}
          ${part.inputs ? part.inputs.map(input => `
            ${input.name} = <input id="p${problemId}-${part.id}-${input.id}" type="${input.type}" /> ${input.unit}
          `).join(', ') : ''}
        </p>
        ${part.need ? `<h4 class="font-bold text-md">${part.need}</h4>` : ''}
        <div>
        <h4 class="font-bold text-lg">Answer:</h4>
          ${part.answer ? `<p>${part.answer.name} = <span id="p${problemId}-${part.id}-answer"></span></p>` : ` <p>-> <span id="p${problemId}-${part.id}-answer"></span></p>`}
          <button id="p${problemId}-${part.id}-submit" class="mt-2 py-2 px-4 bg-green-500 rounded-md text-white hover:bg-opacity-70 duration-150">
            Answer
          </button>
        </div>
      </div>
      ${Array.isArray(part.imageSrc) ? part.imageSrc.map(src => `
        <div class="flex-1">
          <img src="./images/${src}" alt="" />
        </div>
      `).join('') : part.imageSrc ? `
        <div class="flex-1">
          <img src="./images/${part.imageSrc}" alt="" />
        </div>
      ` : ''}
    </div>
  `;
}
