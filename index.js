$(document).ready(function () {
  const result = $(".result").eq(0);
  const button = $(".btn").eq(0);
  const reaction = $(".memoryResult").eq(0);
  const memory = $(".memoryResult").eq(1);
  const verbal = $(".memoryResult").eq(2);
  const visual = $(".memoryResult").eq(3);
  const remark = $(".remark").eq(0);
  const remark1 = $(".remark").eq(1);

  button.on("click", function () {
    // Generate random values
    const reactionResult = Math.floor(Math.random() * 100);
    const memoryResult = Math.floor(Math.random() * 100);
    const verbalResult = Math.floor(Math.random() * 100);
    const visualResult = Math.floor(Math.random() * 100);
    const yourResult = Math.floor(
      ((reactionResult + memoryResult + verbalResult + visualResult) * 100) /
        400
    );

    // Update text content for each element
    reaction.text(reactionResult);
    memory.text(memoryResult);
    verbal.text(verbalResult);
    visual.text(visualResult);

    // Update the overall result
    result.text(yourResult);

    if (yourResult >= 80) {
      remark.text("Great");
      remark1.text(
        "You scored higher than 80% of the people who have taken these tests. You are amazing!!!"
      );
    } else if (yourResult >= 65 && yourResult <= 79) {
      remark.text("Pass");
      remark1.text(
        "You scored higher than 65% of the people who have taken these tests. You passed"
      );
    } else if (yourResult >= 40 && yourResult <= 64) {
      remark.text("Average");
      remark1.text(
        "You scored higher than 40% of the people who have taken these tests. You can do better"
      );
    } else {
      remark.text("Fail");
      remark1.text(
        "You scored lower than 39% of the people who have taken these tests. You really need to try harder next time"
      );
    }
  });
});
