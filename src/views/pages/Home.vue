<template>
  <div class="home">
    <div class="leftPart">
      <div class="profileCard">
        <img :src="this.profile.img" alt="black/white picture" />
        <p>{{this.profile.text}}</p>
      </div>
    </div>
    <div class="rightPart">
        <ul class="studies">
          <li><h3>Studies</h3></li>
          <li v-for="study in this.profile.studies" :key="study.years" class="study">
            <div class="studyInfo">
              <p class="studyDate">{{study.years}}</p>
              <h4>{{study.title}}</h4>
              <p class="studyWhere"><i class="fas fa-map-marker-alt"></i> {{study.where}}</p>
              <p class="studyDiploma"><i class="fas fa-certificate"></i> {{study.diploma}}</p>
            </div>
          </li>
        </ul>
      <div class="skills">
        <h3>My Skills</h3>
        <div>
          <ul class="languages">
            <li><h4>Languages:</h4></li>
            <li v-for="language in this.profile.skills.languages" :key="language">
              {{language}}
            </li>
          </ul>
          <div class="delimiter"></div>
          <ul class="frameworks">
            <li><h4>Frameworks:</h4></li>
            <li v-for="framework in this.profile.skills.frameworks" :key="framework">
              {{framework}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    profile: Object,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="@/assets/css/pages/Home.css">
</style>
