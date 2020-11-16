<template>
  <footer>
    <div class="row">
      <div class="col-12">
        <img src="@/assets/images/logo.png" class="footer-img" />
        <small style="color: rgba(0, 0, 0, .6);">&copy; Youreadfor.me UG (haftungsbeschraenkt)</small>
      </div>
    </div>
  </footer>
</template>
<style scoped>
footer {
  border-top: 2px solid rgba(0, 0, 0, .1);
  padding: 10px;
}

footer .col-12 {
  max-width: 28%;
  margin: 0 auto;
}

.footer-content {
  max-width: 250px;
}

.footer-img {
  object-fit: cover;
  float: left;
  width: 20px;
  margin-right: 6px;
  margin-top: 1px;
}

@media (max-width: 1280px) {
  footer .col-12 {
    max-width: 31%;
  }
}

@media (max-width: 1024px) {
  footer .col-12 {
    max-width: 33%;
  }
}

@media (max-width: 768px) {
  footer .col-12 {
    max-width: 44%;
  }
}

@media (max-width: 480px) {
  footer {
    border-top: 2px solid rgba(0, 0, 0, .1);
    padding: 10px;
  }

  footer .col-12 {
    max-width: 79%;
    margin: 0 auto;
  }

  .footer-content {
    max-width: 250px;
  }

  .footer-img {
    object-fit: cover;
    float: left;
    width: 20px;
    margin-right: 6px;
    margin-top: 1px;
  }
}

@media (max-width: 384px) {
  footer .col-12 {
    max-width: 81%;
    margin: 0 auto;
  }
}

@media (max-width: 375px) {
  footer .col-12 {
    max-width: 87%;
    margin: 0 auto;
  }
}

@media (max-width: 360px) {
  footer .col-12 {
    max-width: 91%;
  }
}

@media (max-width: 320px) {
  footer .col-12 {
    max-width: 85%;
    font-size: 13px;
  }
}

@media (max-width: 280px) {
  footer .col-12 {
    max-width: 61%;
    text-align: center;
  }
}

</style>
