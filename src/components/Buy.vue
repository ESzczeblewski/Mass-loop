<template>
  <section class="buy">
    <p>To na co wydasz zaoszczędzoną gotówkę?</p>
    <button class="btn">KUP <span>8499 zł</span></button>
    <h3>Brzmi dobrze? Uważaj. Dopiero się rozkręcamy!</h3>
  </section>
</template>

<style lang="scss" scoped>
@import "../design";

.buy {
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
    margin-top: 3.75em;
    font-size: 1.6rem;
    width: 17em;
  }

  button {
    font-size: 2rem;
    width: 16em;
    height: 4em;
    border-radius: 3em;
    margin-top: 3em;

    span {
      font-weight: $font-med;
    }
  }
  h3 {
    width: 11em;
    text-align: center;
    margin-top: 3em;
    margin-bottom: 5.15em;
  }
}
</style>