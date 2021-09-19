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
<style scoped>
.home{
  margin-top: 125px;
  min-height: 75vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.leftPart{
  width: 50%;
  margin: 0px 50px;
}
.rightPart{
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0px 50px;
}
.profileCard{
  padding: 50px;
  border: solid 1px var(--primary-color);
}
.profileCard img{
  height: 125px;
  margin-right: 15px;
  float: left;
}
.profileCard p{
  font-weight: 300;
  line-height: 1.7em;
  text-align: left;
}
.studies, .skills{
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--primary-color);
}
h3{
  font-size: 1.4em;
  margin-top: 15px;
  margin-bottom: 15px;
}
.study{
  border-top: 1px solid var(--primary-color);
  padding-top: 3px;
  padding-bottom: 3px;
  line-height: 1.5em;
  width: 50%;
  text-align: left;
}
.studyInfo > h4{
  font-weight: bold;
}
.studyDate{
  text-align: center;
  color: var(--third-color);
  font-style: italic;
}
.skills{
  margin-top: 10px;
}
.skills > div{
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 25px;
}
.skills > div > ul > li {
  text-align: left;
  line-height: 1.4em;
}
.skills > div > ul > li > h4{
  font-weight: bold;
  margin-bottom: 5px;
}
.delimiter{
  width: 1px;
  background-color: var(--primary-color);
}
</style>
