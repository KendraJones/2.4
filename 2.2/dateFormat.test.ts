function dateFormat(shortDate: string):string {
    // this would be like pretend a dev has created this and we test it

    return "";
}

describe ("dateFormat", ()=>{
    it("should format shorter dates correctly", ()=>{
        expect(dateFormat(`1-1-1990`)).toBe("January 1, 1990");
        expect(dateFormat(`3-3-2022`)).toBe("March 3, 2022")
    });
    it("should not format dates with only two year digits", ()=>{
        expect(dateFormat(`01-30-60`)).not.toBe("January 30, 1960")
    })
})