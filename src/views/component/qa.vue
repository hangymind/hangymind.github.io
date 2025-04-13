<template>
  <div class="special-thanks">
    <div class="thanks-info" @click="drawerOpen" type="primary">
      <img src="../../assets/icons/menu/Q&A.png" alt="">
      <span>Credits</span>
      <i class="new" v-if="!checkedUpdateInfo"></i>
    </div>
    <transition name="fade">
      <div class="drawer-thanks" v-if="showExtrasInfo">
        <i class="close" @click="closePanel"></i>
        <h1>Some Credits</h1>
        <p>以下是对游戏开发和支持有重要贡献的个人和团队</p>
        <div class="scroll">
          <div class="info" v-for="(item, index) in thanksList" :key="index">
            <h1>{{item.name}}<span>({{item.role}})</span>:</h1>
            <p>{{item.contribution}}</p>
          </div>
        </div>
        <!-- 添加文本框 -->
        <input
          type="text"
          v-model="unlockCode"
          @keyup.enter="checkUnlockCode"
          placeholder="输入兑换代码"
          class="unlock-input"
        />
        <!-- 显示当前金币数量 -->
        <p>当前金币数量: {{ gold }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { assist } from '../../assets/js/assist';
import { mapState, mapMutations } from 'vuex';

export default {
  name: "special-thanks",
  mixins: [assist],
  data() {
    return {
      checkedUpdateInfo: false,
      showExtrasInfo: false,
      thanksList: [
        {
          name: 'Couy',
          role: '框架开发者',
          contribution: '负责游戏核心逻辑的开发，为游戏的稳定性和性能优化做出了巨大贡献。'
        },
        {
          name: 'Iw46',
          role: '开发者',
          contribution: '精心设计了游戏中的各种角色和场景，赋予了游戏独特的视觉风格。'
        },
        {
          name: '食蚁兽小岚',
          role: '测试人员',
          contribution: '通过大量的测试工作，发现并解决了游戏中的许多问题，提升了游戏的品质。'
        },
        {
          name: 'ZMZ',
          role: '团子',
          contribution: '吉祥物'
        }
      ],
      unlockCode: ''
    };
  },
  computed: {
    ...mapState(['playerAttribute'])
  },
  methods: {
    ...mapMutations(['set_player_gold']),
    drawerOpen() {
      this.showExtrasInfo = true;
      this.checkedUpdateInfo = true;
      localStorage.setItem('checkedUpdateInfo', true);
    },
    closePanel() {
      localStorage.setItem('checkedUpdateInfo', true);
      this.showExtrasInfo = false;
    },
    checkUnlockCode() {
      if (this.unlockCode === 'tuanch') { //兑换码
        // 调用 Vuex 的 mutation 来设置金币数量
        this.set_player_gold(999999);
        this.isShopFree = true;
        this.unlockCode = ''; 
        console.log('金币已设置为 999999，当前金币值:', this.playerAttribute.GOLD);
      } else if (this.unlockCode) {
        alert('解锁代码错误，请重新输入。');
      }
    }
  },
  mounted() {
    this.checkedUpdateInfo = localStorage.getItem('checkedUpdateInfo');
  }
};
</script>

<style lang="scss" scoped>
.special-thanks {
  position: fixed;
  width: 0.5rem;
  height: 0.55rem;
  display: flex;
  bottom: 0.1rem;
  right: 1.5rem;
  z-index: 1;
  cursor: pointer;

  .thanks-info {
    margin-right: 0.2rem;
    cursor: pointer;
    width: 0.5rem;
    height: 0.55rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 0.35rem;
      height: 0.35rem;
    }

    span {
      white-space: nowrap;
      font-size: 0.12rem;
    }

    .new {
      display: flex;
      width: 0.3rem;
      height: 0.16rem;
      position: absolute;
      top: 0rem;
      right: 0px;
      transform: translate(50%, -50%);
      background-image: url("../../assets/icons/menu/NEW.png");
      background-size: contain;
      background-repeat: no-repeat;
      animation: tipsMove 1s infinite;
    }
  }
}

@keyframes tipsMove {
  0% {
    transform: translate(50%, -50%);
  }
  25% {
    transform: translate(50%, -70%);
  }
  50% {
    transform: translate(50%, -50%);
  }
  75% {
    transform: translate(50%, -80%);
  }
  100% {
    transform: translate(50%, -50%);
  }
}

.drawer-thanks {
  position: fixed;
  width: 30%;
  height: 100%;
  background: #9c9c9c;
  top: 0;
  right: 0;
  padding: 0.2rem;
  z-index: 10;

  .scroll {
    height: calc(100% - 0.5rem);
    overflow-y: auto;
  }

  .close {
    cursor: pointer;
    position: absolute;
    top: 0.13rem;
    right: 0.15rem;
    display: block;
    width: 0.3rem;
    height: 0.3rem;
    background-image: url(../../assets/icons/close.png);
    background-size: cover;
  }

  .info {
    padding: 0.2rem;
    text-align: left;
    user-select: text;

    h1 {
      margin: 0.06rem 0;
      font-size: 0.23rem;
      letter-spacing: 1px;
    }

    p {
      margin: 0.1rem;
      padding-left: 0.25rem;
      line-height: 0.2rem;
      color: #fafafa;
      font-size: 0.14rem;
      letter-spacing: 1px;
    }
  }
  .unlock-input {
    position: absolute;
    bottom: 0.2rem;
    left: 0.2rem;
    width: calc(100% - 0.4rem);
    height: 0.4rem;
    padding: 0 0.1rem;
    font-size: 0.16rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}
</style>
