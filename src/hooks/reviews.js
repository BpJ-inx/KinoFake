export function addReview() {
    let descriptionRev = document.querySelector('.reviews__text_area').value
    if (descriptionRev) {
        let userName = ''
        let idFilm = localStorage.getItem('filmID')

        let x = 0
        if (localStorage.getItem('logNAME')) {
            userName = localStorage.getItem('logNAME')
        } else {
            userName = 'guest'
        }



        let review = {
            Name: userName,
            ID: idFilm,
            Description: descriptionRev

        }

        if (localStorage.getItem('lengthRev')) {
            x = +localStorage.getItem('lengthRev')
        } else {
            localStorage.setItem('lengthRev', 0)

        }
        for (let i = 0; i < x + 1; ++i) {
            if (!localStorage.getItem(`Rev.${i}`)) {
                localStorage.setItem(`Rev.${[i]}`, JSON.stringify(review))
                localStorage.setItem('lengthRev', +x + 1)
            }
        }


        document.querySelector('.reviews__text_area').value = ''
    }
}

