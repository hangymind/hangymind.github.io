<template>
  <div id="app">
    <LoadingAnimation />
    <router-view/>
    <!-- 剧情界面 -->
    <transition name="story-fade">
      <div v-if="showStory" class="story-overlay">
        <p class="story-text">{{ currentStory }}</p>
        <button class="next-button" @click="nextStory">
          {{ currentStoryIndex === stories.length - 1 ? '开始旅程' : '下一条' }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import LoadingAnimation from './components/LoadingAnimation.vue'

export default {
  components: {
    LoadingAnimation
  },
  data() {
    return {
      bossCurrentHealth: 100,
      bossMaxHealth: 100,
      showStory: false, // 是否显示剧情界面
      currentStoryIndex: 0, // 当前剧情索引
      // 剧情文字数组
      stories: [
        "从前，一群被称为'降临者'的人来到了这个世界",
        "他们孕育出了人类，其中就有你",
        "但是，这个世界的'法则'却让你感到了一些不安",
        "而规则就是用来打破的",
        "算了不说了我妈让我收电脑了"
      ]
    };
  },
  computed: {
    // 当前显示的剧情文字
    currentStory() {
      return this.stories[this.currentStoryIndex];
    }
  },
  mounted() {
    // 模拟加载界面结束，实际中可根据加载完成事件触发
    setTimeout(() => {
      this.showStory = true;
    }, 2000);
  },
  methods: {
    // 切换到下一条剧情
    nextStory() {
      this.currentStoryIndex++;
      if (this.currentStoryIndex >= this.stories.length) {
        this.showStory = false;
      }
    }
  }
}
</script>

<style lang="scss">
// 移除重复的字体引入
// @import url('https://static.florr.io/ba83d7e244711ae56b4797e04dea8f861efe3522/Ubuntu-B.ttf');
// @import url('https://fonts.googleapis.com/css?family=Noto+Sans+SC');
// @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
// @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');

// #app {
//   font-family: 'Noto Sans','Source Sans Pro','Avenir', Helvetica, Arial, sans-serif !important;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   height:100%;
// }
// div,button,span,p,h1,h2,h3,h4,h5,b,input{
//   font-family: 'Noto Sans','Source Sans Pro','Avenir', Helvetica, Arial, sans-serif !important;
// }

.story-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.story-text {
  color: white;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.next-button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

/* 剧情切换动画 */
.story-fade-enter-active,
.story-fade-leave-active {
  transition: opacity 0.5s;
}
.story-fade-enter-from,
.story-fade-leave-to {
  opacity: 0;
}
</style>
