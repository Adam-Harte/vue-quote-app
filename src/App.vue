<template>
    <div class="container">
        <quotesCounter></quotesCounter>
        <createQuote :title="title" :subtitle="subtitle" :content="content"></createQuote>
        <quote></quote>
    </div>
</template>

<script>
    import CreateQuote from './components/CreateQuote'
    import Quote from './components/Quote'
    import QuotesCounter from './components/QuotesCounter'

    export default {
        components: {
            createQuote: CreateQuote,
            quote: Quote,
            quotesCounter: QuotesCounter
        },
        data: function () {
            return {
                title: '',
                subtitle: '',
                content: ''
            }
        }
    }
</script>

<style>
</style>
