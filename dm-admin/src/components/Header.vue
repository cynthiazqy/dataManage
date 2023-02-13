<template>
  <div class="appHeader">
    <div class="header-inner">
      <img
        width="280px"
        height="70px"
        :src="headLogo"
        class="head-logo"
        @click="$router.push('/appHome')"
      />
      <div class="header-right">
        <img
          :src="head_control"
          class="control-img"
        />
        <div
          class="console-box"
          @click="openBack"
        >
          控制台
        </div>
        <div
          class="avatar"
          @click="$router.push('/dashboard')"
        >
          <el-popover
            popper-class="pop-center"
            placement="top"
            trigger="hover"
          >
            <div slot="reference">
              <img
                class=""
                :src="userService.headUrl"
                v-if="userService.headUrl"
                width="40px"
                height="40px"
              />
            </div>
            <slot>
              <el-card
                class="message-center"
                shadow="never"
              >
                <div class="header-title">
                  <p>{{ userService.name }}</p>
                  <p>
                    {{
                      userService.departments[0] && userService.departments[0]
                    }}
                  </p>
                </div>
                <div
                  v-for="(item, index) in btnList"
                  :key="index"
                  class="list-item"
                  @click="jumpto(item.link)"
                >
                  <p class="title">
                    <i :class="item.icon"></i> {{ item.title }}
                  </p>
                </div>
                <div
                  class="list-item"
                  @click="handleLogout"
                >
                  <p class="title">
                    <i class="el-icon-switch-button"></i> 退出登录
                  </p>
                </div>
              </el-card>
            </slot>
          </el-popover>
        </div>
      </div>
      <div class="menu-box">
        <div
          :class="{
            'menu-item': item.id !== activeItem,
            'item-active': item.id === activeItem
          }"
          v-for="(item, index) in menus"
          :key="index"
          @click="clickItem(item)"
        >
          <span>{{ item.menuName }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import head_control from '../../../assets/img/head-control.png';
export default {
  name: 'Xheader',
  data() {
    return {
      activeItem: 0,
      //menus: [],
      head_control: head_control,
      btnList: [
        {
          title: '个人资料',
          link: '/personalData',
          icon: 'el-icon-user'
        },
        {
          title: '消息通知',
          link: '/news',
          icon: 'el-icon-chat-dot-round'
        },
        {
          title: '我的应用',
          link: '/myApps',
          icon: 'el-icon-box'
        },
        {
          title: '修改密码',
          link: '/changePassword',
          icon: 'el-icon-unlock'
        }
      ]
    };
  },
  computed: {
    headLogo() {
      return (
        this.configService.resource.obs.front +
        this.configService.resource.headerLogo
      );
    },
    menus() {
      return this.configService.resource.menus;
    }
  },
  watch: {
    $route(value) {
      for (let i in this.menus) {
        if (this.menus[i].url === value.path) {
          this.activeItem = this.menus[i].id;
        }
        if (value.path === '/search') {
          this.activeItem = '';
        }
      }
    }
  },
  mounted() {
    for (let i in this.menus) {
      if (this.menus[i].url === this.$route.path) {
        this.activeItem = this.menus[i].id;
      }
    }
  },
  created() {
    console.log('created');
  },
  methods: {
    clickItem(item) {
      this.activeItem = item.id;
      this.$router.push({ path: item.url, query: { typeId: item.typeId } });
    },
    openBack() {
      window.open(this.appService.backUrl);
    },
    jumpto(url) {
      this.$router.push(url);
    },
    handleLogout() {
      this.$_user.logout().finally(() => {
        this.userService.removeUser();
        // this.$router.push('/login');
      });
    }
  }
};
</script>

<style lang="scss">
.pop-center {
  padding: 0;
  .message-center {
    width: 200px;
    border: none;
    .el-card__body {
      border: none;
      padding: 0;
      /* padding-bottom: 20px; */
      .header-title {
        padding: 10px 30px;
        /* height: 52px; */
        background: #f2f2f2;
        /* line-height: 22px; */
        text-align: left;
        border-bottom: 1px solid #e4e4e4;
        /* margin-bottom: 5px; */
        p:first-child {
          font-size: 16px;
          color: #333;
        }
        p:last-child {
          font-size: 12px;
          color: #999;
        }
      }
      .list-item {
        cursor: pointer;
        height: 48px;
        padding: 0 30px;
        line-height: 48px;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        .title {
          i {
            padding-right: 8px;
            color: #9e9e9e;
          }
          vertical-align: middle;
          width: 100%;
        }
      }
      .list-item .title:hover {
        color: #00706a;
      }
    }
  }
}
.appHeader {
  width: 100%;
  height: 70px;
  line-height: 70px;
  background-color: #fff;

  .header-inner {
    width: 1200px;
    margin: 0 auto;
    height: 70px;
    .head-logo {
      float: left;
      height: 70px;
      cursor: pointer;
    }
    .menu-box {
      float: right;
      line-height: 71px;
      height: 71px;
      margin-right: 74px;
      .menu-item {
        display: inline-block;
        margin-left: 52px;
        cursor: pointer;
        span {
          color: #666;
          font-size: 16px;
          height: 17px;
          &:hover {
            color: #00706a;
          }
          letter-spacing: 1px;
        }
      }
      .item-active {
        display: inline-block;
        margin-left: 52px;
        cursor: pointer;
        box-sizing: border-box;
        height: 71px;
        line-height: 71px;
        border-bottom: 4px solid #00706a;
        span {
          color: #00706a;
          font-size: 16px;
          height: 17px;
          font-weight: 600;
          letter-spacing: 1px;
        }
      }
    }
    .header-right {
      float: right;
      .control-img {
        vertical-align: middle;
        margin-right: 10px;
      }
      .console-box {
        display: inline-block;
        color: #666;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
        vertical-align: middle;
        &:hover {
          color: #00706a;
        }
      }
      .avatar {
        display: inline-block;
        width: 40px;
        height: 40px;
        vertical-align: middle;
        line-height: 70px;
        margin-left: 28px;
        cursor: pointer;
        background-color: burlywood;
        border-radius: 50%;
        img {
          border-radius: 50%;
          margin: 0 auto;
          vertical-align: top;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
