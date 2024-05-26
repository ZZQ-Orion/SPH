<template>
  <div>
    <!-- <type-nav></type-nav> -->
    <type-nav/>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="item in floorList" :key="item.id" :floor="item"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
// import TypeNav from '@/pages/views/Home/TypeNav'
import ListContainer from '@/pages/views/Home/ListContainer'
import TodayRecommend from '@/pages/views/Home/TodayRecommend'
import Rank from '@/pages/views/Home/Rank'
import Like from '@/pages/views/Home/Like'
import Floor from '@/pages/views/Home/Floor'
import Brand from '@/pages/views/Home/Brand'
import { mapState } from 'vuex';


export default {
  name:'home-c',
  // components:{TypeNav}
  components:{
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    this.$store.dispatch('getFloorList'),
    this.$store.dispatch('getUserInfo')
  },
  computed:{
    ...mapState({
        floorList:state => state.home.floorList
    }),
  }
  }

</script>

<style>

</style>