<template>
  <div class="home-container">
    <!-- 顶部背景区域 -->
    <div class="banner-section">
      <div class="hero-section">
        <div class="hero-content">
          <div class="hero-quote">
            <p class="quote-text">
              每个不曾起舞的日子,都是对生命的辜负
            </p>
            <p class="quote-author">
              —— 尼采
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 欢迎区域 -->
    <div class="welcome-section">
      <div class="welcome-content">
        <div class="welcome-right">
          <div class="welcome-title">
            <h3>欢迎使用template vue</h3>
          </div>
          <p class="welcome-desc">
            这是一款极简(其实是自己只能封装这么多了QAQ)风格的后台管理模板，包含前后端解决方案。前端使用 Vite + Vue3 + Pinia + Element Plus + Vue Router，后端使用 Spring
            Boot + MyBatis + MySQL，简单易用，匠心设计！
          </p>
        </div>
      </div>
    </div>

    <!-- 特性和技术栈 -->
    <div class="features-section">
      <div class="feature-card">
        <div class="feature-header">
          <h3>特点</h3>
        </div>
        <ul class="feature-list">
          <li>基于Vue 3 | 技术栈: Vite + Vue3 + Pinia + Vue Router</li>
          <li>组件库 | Element Plus，优雅、美观、功能丰富</li>
          <li>响应式布局，根据不同屏幕尺寸自适应，美观简洁</li>
          <li>先进的文件结构设计，多个模块之间低耦合，易于维护和扩展</li>
          <li>扁平化路由设计，每一个组件都可以是一个页面，页面切换流畅</li>
          <li>基于角色的权限控制，确保系统安全性</li>
          <li>基于Element Plus的消息提示，支持批量操作和自定义配置</li>
          <li>基于Element Plus封装的业务组件，包含 Page 组件、CRUD 表格组件，减少大量重复性工作</li>
        </ul>

      </div>

      <div class="tech-stack-card">
       <div class="tech-header">
          <h3>技术栈</h3>
        </div>
        <div ref="techChart" style="width: 100%; height: 300px;"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const techChart = ref(null)

onMounted(() => {
  // 使用ECharts绘制饼图
  if (techChart.value) {
    const chart = echarts.init(techChart.value)
    
    // 数据 - 更新为匹配示例的比例
    const data = [
      { value: 37, name: 'JavaScript', itemStyle: { color: '#95D147' } }, // 绿色
      { value: 30, name: 'Vue', itemStyle: { color: '#409EFF' } }, // 蓝色
      { value: 15, name: 'CSS', itemStyle: { color: '#5E5E5E' } }, // 灰色
      { value: 12, name: 'HTML', itemStyle: { color: '#FF7F50' } }, // 橙色
      { value: 6, name: 'Other', itemStyle: { color: '#00BFFF' } } // 亮蓝色
    ]
    
    // 配置项
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}%'
      },
      legend: {
        orient: 'horizontal',
        bottom: 0,
        itemWidth: 12,
        itemHeight: 12,
        textStyle: {
          fontSize: 12
        }
      },
      series: [
        {
          name: '技术栈',
          type: 'pie',
          radius: ['35%', '80%'], // 环形图
          center: ['50%', '45%'],
          avoidLabelOverlap: false,
          label: {
            show: false, // 默认不显示中心文本
            position: 'center',
            formatter: '{b}',
            fontSize: 24,
            fontWeight: 'bold',
            color: '#333'
          },
          itemStyle: {
            borderRadius: 8, // 倒角效果
            borderColor: '#fff', // 缝隙颜色
            borderWidth: 4 // 缝隙宽度
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 24,
              fontWeight: 'bold'
            },
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          data: data
        }
      ]
    }
    
    // 监听鼠标事件，实现中心文本动态变化
    chart.on('mouseover', function(params) {
      if (params.data && params.data.name) {
        chart.setOption({
          series: [{
            label: {
              show: true,
              formatter: params.data.name
            }
          }]
        });
      }
    });
    
    // 鼠标离开时隐藏文本
    chart.on('mouseout', function() {
      chart.setOption({
        series: [{
          label: {
            show: false
          }
        }]
      });
    });
    
    // 使用配置项显示图表
    chart.setOption(option)
    
    // 响应式调整
    window.addEventListener('resize', () => {
      chart.resize()
    })
  }
})
</script>

<style scoped>
.home-container {
  padding: 20px;
  background: #f5f7fa;
  min-height: 100vh;
}

/* 顶部背景区域 */
.hero-section {
  position: relative;
  height: 300px;
  background-image: url('@/assets/image/Nahida.png');
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 8px;
}

.hero-section::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top left,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.5) 30%,
      rgba(0, 0, 0, 0) 60%);
  z-index: 1;
}


.hero-content {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 30px;
  box-sizing: border-box;
}

.hero-quote {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  max-width: 400px;
  text-align: right;
  line-height: 1.4;
}

.quote-text {
  margin-top: 28px;
  font-size: 14px;
  opacity: 0.6;
  margin-bottom: 12px;
}

.quote-author {
  text-align: right;
  font-size: 12px;
  opacity: 0.4;
  margin: 0;
}

/* 欢迎区域 */
.welcome-section {
  background: #fff;
  border-radius: 8px;
  padding: 30px;
}

.banner-section {
  background: #fff;
  border-radius: 8px;
}

.welcome-content {
  display: flex;
  align-items: flex-start;
  gap: 40px;
}

.welcome-avatar img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #f0f0f0;
}

.welcome-text h2 {
  margin: 0 0 8px 0;
  color: #303133;
}

.welcome-text p {
  margin: 0 0 8px 0;
  color: #606266;
  font-size: 14px;
}

.welcome-right {
  flex: 1;
}

.welcome-title h3 {
  margin: 0 0 12px 0;
  color: #303133;
  display: flex;
  align-items: center;
  gap: 10px;
}

.welcome-desc {
  margin: 0 0 20px 0;
  color: #606266;
  line-height: 1.6;
  font-size: 14px;
}


.welcome-link a {
  color: #409EFF;
  text-decoration: none;
  font-size: 14px;
}

/* 特性和技术栈 */
.features-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px 0 0 0;
}

.feature-card,
.tech-stack-card {
  background: #fff;
  border-radius: 8px;
  padding: 24px;
}

.feature-header,
.tech-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.feature-header h3,
.tech-header h3 {
  margin: 0;
  color: #303133;
  display: flex;
  align-items: center;
  gap: 8px;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.feature-list li {
  margin-bottom: 12px;
  color: #606266;
  font-size: 14px;
  line-height: 1.5;
}

.tech-chart {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.tech-legend {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #606266;
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.legend-color.vue {
  background: #4FC08D;
}

.legend-color.javascript {
  background: #F7DF1E;
}

.legend-color.css {
  background: #1572B6;
}

.legend-color.html {
  background: #E34F26;
}

.legend-color.element {
  background: #409EFF;
}


/* 响应式 */
@media (max-width: 768px) {
  .welcome-content {
    flex-direction: column;
  }

  .features-section {
    grid-template-columns: 1fr;
  }
}
</style>