$(document).ready(function () {
  let savingAmout = [];
  let newSavingAmount = 0;

  $("#checking-deposit").on("click", function depositVal() {
    let currentdeposit = $("#checking-amount").val();
    savingAmout.push(currentdeposit);
    newSavingAmount = savingAmout.reduce(
      (a, b) => parseInt(a) + parseInt(b),
      0
    );
    $("#checking-balance").text(newSavingAmount);
  });

  $("#checking-withdraw").on("click", function () {
    let withdrawValue = $("#checking-amount").val();
    let withdraw = parseInt(withdrawValue);
    newSavingAmount -= parseInt(withdraw);
    $("#checking-balance").text(newSavingAmount);

    if (newSavingAmount < 0) {
      $("#checking-balance").addClass(".zero");
    }
  });
});
