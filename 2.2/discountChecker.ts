function discountCalculator (
    senior: boolean,
    vetOrResponder: boolean,
    clubMember: boolean
): number{
    if (senior && vetOrResponder && clubMember) return 0.25;
    if ((senior && clubMember) || (vetOrResponder && clubMember)) return 0.15;
    if (senior && clubMember) return 0.2;
    if (senior || vetOrResponder || clubMember) return 0.1;
    return 0;
};
console.log("all three discounts work", discountCalculator(true, true, true));
console.log("Senior && vetOrResponder", discountCalculator(true, true, false));
console.log("senior && club Member", discountCalculator(true, false, true));