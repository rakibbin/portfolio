<script setup lang="ts">
import FooterView from '@/components/FooterView.vue';
import SideBar from '@/components/SideBar.vue';
</script>

<template>
    <!-- ========== Start ControlBar ========== -->

    <div class="control-bar">
        <!-- Brand -->
        <a class="logo-brand" href="#"><span>Rakib</span>Khan</a>
        <!-- Menu Toggle -->
        <button class="menu-toggle">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
    </div>

    <!-- ========== End ControlBar ========== -->

  <SideBar/>

    <!-- ========== Start Page Content ========== -->

    <div class="page-content">

        <!-- ========== Start Home ========== -->

        <Router-view/>

        <FooterView/>

        <!-- ========== Start Scroll To Top  ========== -->

        <a href="#" class="scroll-top">
            <i class="fa fa-angle-up"></i>
        </a>

        <!-- ========== End Scroll To Top  ========== -->
    </div>

    <!-- ========== End Page Content ========== -->
</template>