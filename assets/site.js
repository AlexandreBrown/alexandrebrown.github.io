const photoDialog = document.querySelector('.photo-dialog')

if (photoDialog && typeof photoDialog.showModal === 'function') {
  const dialogImage = photoDialog.querySelector('img')
  const dialogCaption = photoDialog.querySelector('figcaption')
  const closeButton = photoDialog.querySelector('.dialog-close')
  let previousScrollY = 0

  for (const link of document.querySelectorAll('[data-lightbox]')) {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
      event.preventDefault()
      dialogImage.src = link.href
      dialogImage.alt = link.querySelector('img').alt
      dialogCaption.textContent = link.dataset.caption
      previousScrollY = window.scrollY
      photoDialog.showModal()
      document.body.classList.add('dialog-open')
      closeButton.focus({ preventScroll: true })
    })
  }

  closeButton.addEventListener('click', () => photoDialog.close())
  photoDialog.addEventListener('click', event => {
    if (event.target === photoDialog) photoDialog.close()
  })
  photoDialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open')
    window.scrollTo({ top: previousScrollY, behavior: 'instant' })
  })
}

for (const video of document.querySelectorAll('[data-video-playlist]')) {
  const playlist = JSON.parse(video.dataset.videoPlaylist)
  let currentIndex = 0

  video.addEventListener('ended', () => {
    currentIndex = (currentIndex + 1) % playlist.length
    video.src = playlist[currentIndex]
    video.play().catch(() => {
      // Native controls remain available if the browser pauses autoplay.
    })
  })
}

const citation = document.querySelector('#segdac-citation')
if (citation) {
  const revealCitation = () => {
    if (window.location.hash === '#segdac-citation') citation.open = true
  }
  revealCitation()
  window.addEventListener('hashchange', revealCitation)

  const copyButton = document.querySelector('[data-copy-citation]')
  const code = document.querySelector('#citation-text')
  const copyStatus = document.querySelector('.copy-status')
  const downloadLink = document.querySelector('[data-download-citation]')
  downloadLink.addEventListener('click', event => {
    event.preventDefault()
    const file = new Blob([code.textContent.trim() + '\n'], { type: 'application/x-bibtex;charset=utf-8' })
    const url = URL.createObjectURL(file)
    const link = document.createElement('a')
    link.href = url
    link.download = downloadLink.download
    document.body.append(link)
    link.click()
    link.remove()
    window.setTimeout(() => URL.revokeObjectURL(url), 10000)
  })

  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(code.textContent)
      copyStatus.textContent = 'Citation copied.'
      copyButton.textContent = 'Copied'
      window.setTimeout(() => { copyButton.textContent = 'Copy citation' }, 2200)
    } catch {
      const selection = window.getSelection()
      const range = document.createRange()
      range.selectNodeContents(code)
      selection.removeAllRanges()
      selection.addRange(range)
      copyStatus.textContent = 'Citation selected. Use your keyboard to copy, or download the .bib file.'
    }
  })
}
