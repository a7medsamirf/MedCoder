<template>
  <div>
     <NuxtLink data-cursor-hover class="btn-primary-V1" to="/portfolio"> {{ $t('common.My-Portfolio') }} <i class="arrow"></i></NuxtLink>
  </div>
</template>

<script>
export default {
    name:"button-V1",
}
</script>

<style lang="scss" scoped>
.btn-primary-V1{
    font-weight: 700;
    color: #171717;
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: #171717;
    border-radius: 4px 4px 4px 4px;
    box-shadow: 4px 4px 0px 0px #000000;
    font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
    margin-top: calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)));
    line-height: 23px;
    background: var(--bg-color);
    padding: calc(8px + (12 - 8) * ((100vw - 320px) / (1920 - 320))) calc(18px + (30 - 18) * ((100vw - 320px) / (1920 - 320)));
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 10px;
    position: relative;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    &::after{
    position: absolute;
    content: "";
    width: 100%;
    height: 2.5px;
    background-color: inherit;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: -6px;
    -webkit-transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
 .arrow {
    width: calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)));
    height: 2px;
    background-color: #171717;
    display: inline-block;
    position: relative;
    margin-top: 2px;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    &::after{
    position: absolute;
    content: "";
    width: 60%;
    top: -3px;
    right: 0;
    height: inherit;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    background-color: inherit;
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
    &:before {
    content: "";
    position: absolute;
    width: 60%;
    bottom: -3px;
    right: 0;
    height: inherit;
    transition: all 0.4s;
    background-color: inherit;
    transform-origin: center;
    transform: rotate(140deg);
}
}

}
.btn-primary-V1:hover::after {
    width: 0;
}

.btn-primary-V1:hover .arrow {
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
}
</style>
