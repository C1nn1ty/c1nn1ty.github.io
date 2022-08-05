const dropdown = document.querySelector('.categories')
const categoryList = [
    'Action & Adventure',
    'Fantasy',
    'Horror',
    'Mental Health',
    'Murder Mystery',
    'Romance',
    'Science Fiction',
]
for (const item of categoryList) {
    const link = document.createElement('a')
    link.href = '/bookrec/?category=' + encodeURIComponent(item)
    link.innerText = item
    dropdown.appendChild(link)
}