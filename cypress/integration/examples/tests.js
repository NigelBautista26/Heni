import base from "../../pages/base"

describe("Test The Application", () => {
    beforeEach(() => {  
        base.goToURL()
        cy.url().should("include", "SnapShot#/SnapScout")
    })

    it("Search an image...", () => {
        base.searchImage()
    })

    it("Select mountains...", () => {
        base.clickMountainsOption()
    })

    it("Select beaches...", () => {
        base.clickBeachesOption()
    })

    it("Select birds...", () => {
        base.clickBirdsOption()
    })

    it("Select food...", () => {
        base.clickFoodOption()
    })

    it("No image found...", () => {
        base.noImageFound()
    })

})