<template>
  <section class="buy">
    <p>{{ $t("footer.paragraph") }}</p>
    <button class="btn">{{ $t("footer.buy") }} <span>8499 zł</span></button>
    <h3>{{ $t("footer.summary") }}</h3>
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

    @media screen and (min-width: 64em) {
      font-size: 2rem;
      margin-top: 4.05em;
      width: 21em;
    }
  }

  button {
    font-size: 2rem;
    width: 16em;
    height: 4em;
    border-radius: 3em;
    margin-top: 3em;

    @media screen and (min-width: 64em) {
      font-size: 2.4rem;
      margin-top: 2.5em;
    }

    span {
      font-weight: $font-med;
    }
  }
  h3 {
    width: 11em;
    text-align: center;
    margin-top: 3em;
    margin-bottom: 5.15em;

    @media screen and (min-width: 64em) {
      font-size: 2.8rem;
      line-height: 3.4rem;
      width: 15em;
      margin-top: 2.85em;
      margin-bottom: 5.54em;
    }
  }
}
</style>