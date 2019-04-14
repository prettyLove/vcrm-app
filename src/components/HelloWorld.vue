<template>
    <div>
        <md-button type="default" round>Default & Round</md-button>
        <div class="md-example-child  md-example-child-button md-example-child-button-3">
            <div class="md-example-section">
                <md-button type="primary" icon="edit" inline>Inline Primary</md-button>
                <md-button type="primary" inline plain>Inline Plain</md-button>
            </div>
            <br>
            <div class="md-example-section">
                <md-button type="warning" size="small" inline>Warning</md-button>
                <md-button type="disabled" size="small" inline>Disabled</md-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {Button} from 'mand-mobile'

    export default {
        name: "HelloWorld",
        components: {[Button.name]: Button},
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
