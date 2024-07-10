// -- 獎金跳動 -- //
let ar0 = 1023183.2; //原本金額
let ar = 1033200.55; //新金額
anime({
    targets: ".bonus",
    innerHTML: [ar0, ar],
    easing: 'steps(35)',
    duration: 2500,
    round: 20,
});

let pz0 = 1000000.22; //原本金額
let pz1 = 1000600.66; //新金額
anime({
    targets: ".crazy-time .award",
    innerHTML: [pz0, pz1],
    easing: "steps(35)",
    duration: 2000,
    round: 20,
});
let aw0 = 1200000.22; //原本金額
let aw1 = 1208600.66; //新金額
anime({
    targets: ".jackpot .award",
    innerHTML: [aw0, aw1],
    easing: "steps(35)",
    duration: 2000,
    round: 20,
});